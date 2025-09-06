const createElements = (arr) => {
  // when any array come here this function return ....>
  const htmlElemets = arr.map((el) => `<span class="btn">${el}</span>`);
  const join = htmlElemets.join(' ');
  return join;
};
// for spinner
const manageSpinner = (status) => {
  if (status == true) {
    document.getElementById('spinner').classList.remove('hidden');
    document.getElementById('wordContainer').classList.add('hidden');
  } else {
    document.getElementById('wordContainer').classList.remove('hidden');
    document.getElementById('spinner').classList.add('hidden');
  }
};
const loadLessons = () => {
  fetch('https://openapi.programming-hero.com/api/levels/all')
    .then((res) => res.json())
    .then((json) => displayLesson(json.data));
};
const removeActive = () => {
  // this function for remove "active" class
  const lessoButtons = document.querySelectorAll('.lesson-btn');
  lessoButtons.forEach((btn) => btn.classList.remove('active'));
};
const loadLevelWord = (id) => {
  manageSpinner(true); // spinner visible
  // this arrow function for
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      removeActive(); // function call for remove all active btn
      const clickBtn = document.getElementById(`lesson-btn-${id}`); // select button
      clickBtn.classList.add('active'); // add active class clicked button
      displayLevelWord(json.data);
    });
};
const loadWordDetail = async (id) => {
  // word details
  const url = `https://openapi.programming-hero.com/api/word/${id}`;
  const res = await fetch(url);
  const details = await res.json();
  displayWordDetails(details.data);
};
const displayWordDetails = (word) => {
  console.log(word);
  const detailsBox = document.getElementById('detailsContainer');
  detailsBox.innerHTML = `
                <div class="">
                    <h2 class="text-2xl font-bold">${word.word} ( <i class="fa-solid fa-microphone-lines"></i>:${
    word.pronunciation
  })</h2>
                </div>
                <div class="">
                    <h2 class=" font-bold">meaning</h2>
                    <p>${word.meaning}</p>
                <div class="">
                    <h2 class=" font-bold">Example</h2>
                    <p>${word.sentence}</p>
                </div>
                <div class="">
                    <h2 class=" font-bold">synonym</h2>
                    <div>${createElements(word.synonyms)}</div> 
                </div>
    `;
  document.getElementById('word_modal').showModal();
};
const displayLevelWord = (words) => {
  // show display words
  const wordContainer = document.getElementById('wordContainer');
  wordContainer.innerHTML = '';
  if (words.length == 0) {
    // error's show
    wordContainer.innerHTML = `
            <div class="my-10 p-4 col-span-full text-center flex flex-col items-center">
                <img class="h-20 w-20" src="assets/alert-error.png" alt="">
                <p class="font-bangla text-xl font-medium text-gray-800 py-4">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি। </p>
                <h1 class="text-3xl">
                    নেক্সট Lesson এ যান
                </h1>
            </div>
        `;
    manageSpinner(false); // stop spinner
    return;
  }
  words.forEach((word) => {
    // error for words cards
    const card = document.createElement('div');
    card.innerHTML = `
            <div class="bg-white rounded-xl shadow-sm text-center p-10 px-5 space-y-4">
                <h2 class="font-bold text-2xl">${word.word ? word.word : 'শব্দ পাওয়া যায়নি'}</h2>
                <p class="font-semibold ">Meaning /Pronunciation </p>
                <div class="text-2xl font-semibold font-bangla">${word.meaning ? word.meaning : 'অর্থ পাওয়া যায়নি'}/${
                word.pronunciation ? word.pronunciation : 'উচ্চারণ পাওয়া যায়নি'
                }</div>
                <div class="flex justify-between items-center">
                    <button onclick="loadWordDetail(${word.id})" class="btn bg-[#1a91ff10] hover:bg-[#1a91ff80]">
                        <i class="fa-solid fa-circle-info"></i>
                    </button>
                    <button class="btn bg-[#1a91ff10] hover:bg-[#1a91ff80]">
                        <i class="fa-solid fa-volume-high"></i>
                    </button>
                </div>
            </div>
        `;
    wordContainer.append(card);
  });
  manageSpinner(false); // spinner hide
};
const displayLesson = (lessons) => {
  // show button lesson name
  // 1. get the container & empty
  const levelContainer = document.getElementById('levelContainer');
  levelContainer.innerHTML = '';
  // 2. get into every lessons
  lessons.forEach((lesson) => {
    //3. create element
    const btnDiv = document.createElement('div');
    btnDiv.innerHTML = `
            <button id="lesson-btn-${lesson.level_no}"  onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary flex items-center gap-3 lesson-btn">
            <i class="fa-solid fa-book-open"></i> ${lesson.lessonName} - ${lesson.level_no} </button>
        `;
    // 4. append into container
    levelContainer.append(btnDiv);
  });
};

loadLessons();
