import { Link, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const ModelDetails = () => {
  const data = useLoaderData()
 const model = data.result
 console.log(model)

 const navigate = useNavigate()


 const handleDlete = () => {
  Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
     

    
    fetch(`http://localhost:3000/models/${model._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => res.json())
    .then(data=> {
      console.log(data)
      navigate('/all-models')

         Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    })
    .catch(err => {
      console.log(err)
    })


 
  }
});
 }
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
          <div className="shrink-0 w-full md:w-1/2">
            <img
              src={model.thumbnail}
              alt=""
              className="w-full object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {model.name}
            </h1>

            {/* Category Badge */}
            <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
            {model.category}
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
             {model.description}
            </p>

            {/* Optional: Action Buttons */}
            <div className="flex gap-3 mt-6">
              <Link
                to={`/update-model/${model._id}`}
                className="btn btn-primary rounded-full bg-linear-to-r from-pink-500 to-red-600 text-white border-0 hover:from-pink-600 hover:to-red-700"
              >
                Update Model
              </Link>
              <button onClick={handleDlete} className="btn btn-outline rounded-full border-gray-300 hover:border-pink-500 hover:text-pink-600">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetails;
