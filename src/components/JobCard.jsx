import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const {
    _id,
    job_title,
    buyer,
    description,
    category,
    deadline,
    min_price,
    max_price,
    bid_count,
  } = job || {};
  return (
    <Link
      to={`/job/${_id}`}
      className="relative bg-white border border-gray-200 rounded-2xl p-5 shadow-sm group transition-all duration-700 delay-100 hover:bg-[#655ced]"
    >
      {/* Top row: Deadline (left) and Category (right) */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm text-gray-500 group-hover:text-white transition-all duration-300 ">
          Deadline: {new Date(deadline).toLocaleDateString()}
        </span>
        <span className="text-xs font-medium bg-[#ecebfe] text-[#655ced] px-3 lg:px-1 py-1 rounded-full group-hover:bg-white group-hover:text-[#655ced] transition-all duration-300">
          {category}
        </span>
      </div>

      {/* Job Title */}
      <h2 className="text-xl font-semibold text-[#655ced] group-hover:text-white mb-2 transition-all duration-300">
        {job_title}
      </h2>

      {/* Buyer */}
      <p className="text-gray-600 group-hover:text-white mb-1 transition-all duration-300">
        <span className="font-medium">Buyer Email:</span> {buyer.email || "N/A"}
      </p>

      {/* description */}
      <p
        title={description}
        className="text-gray-600 group-hover:text-white mb-1 transition-all duration-300"
      >
        <span className="font-medium">description:</span>{" "}
        {description.substring(0, 10)}....
      </p>

      {/* Range */}
      <p className="text-gray-600 group-hover:text-white transition-all duration-300">
        <span className="font-medium">Range:</span>{" "}
        {min_price ? `$${min_price}` : "Negotiable"} -{" "}
        {max_price ? `$${max_price}` : "Negotiable"}
      </p>
      {/* Total bids */}
      <p className="text-gray-600 mt-2 group-hover:text-white mb-1 transition-all duration-300">
        <span className="font-medium">Total Bids:</span> {bid_count?bid_count:0}
      </p>
    </Link>
  );
};

export default JobCard;
