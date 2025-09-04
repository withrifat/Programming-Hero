
const loadLessons =()=> {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res)=>res.json())
    .then(json => displayLesson(json.data))
}
const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
    .then((res)=>res.json())
    .then(json => displayLevelWord(json.data))
}
const displayLevelWord = (words)=>{
    const wordContainer = document.getElementById("wordContainer");
    wordContainer.innerHTML="";
    words.forEach((word)=>{
        const card = document.createElement('div');
        card.innerHTML=`
            <div class="bg-white rounded-xl shadow-sm text-center p-10 px-5 space-y-4">
                <h2 class="font-bold text-2xl">${word.word}</h2>
                <p class="font-semibold ">Meaning /Pronunciation </p>
                <div class="text-2xl font-semibold font-bangla">${word.meaning}/${word.pronunciation}</div>
                <div class="flex justify-between items-center">
                    <button class="btn bg-[#1a91ff10] hover:bg-[#1a91ff80]">
                        <i class="fa-solid fa-circle-info"></i>
                    </button>
                    <button class="btn bg-[#1a91ff10] hover:bg-[#1a91ff80]">
                        <i class="fa-solid fa-volume-high"></i>
                    </button>
                </div>
            </div>
        `;
        wordContainer.append(card);
    })
}
const displayLesson = (lessons) =>{
    // 1. get the container & empty
    const levelContainer = document.getElementById('levelContainer');
    levelContainer.innerHTML="";
    // 2. get into every lessons
    lessons.forEach((lesson)=>{
        //3. create element 
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML=`
            <button  onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary flex items-center gap-3">
            <i class="fa-solid fa-book-open"></i> ${lesson.lessonName} - ${lesson.level_no} </button>
        `;
        // 4. append into container
        levelContainer.append(btnDiv);
    })
}

loadLessons()