import { CDN_LINK } from "../utils/constant";

function Card(props) {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-40 object-cover"
        src={CDN_LINK + cloudinaryImageId}
        alt={name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{name}</div>
        <p className="text-gray-600 text-sm mb-2">{cuisines.join(", ")}</p>
        <div className="flex items-center mb-2">
          <svg
            className="w-4 h-4 text-yellow-500 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 0 1 .777.37l2.714 3.355 4.477.824a1 1 0 0 1 .555 1.705l-3.246 2.494.968 4.45a1 1 0 0 1-1.451 1.054L10 14.69l-4.046 2.13a1 1 0 0 1-1.45-1.054l.968-4.45-3.246-2.494a1 1 0 0 1 .555-1.705l4.477-.824L9.223 2.37A1 1 0 0 1 10 2zm0 3.582a1 1 0 0 1 .238.03l2.362.434-1.702 1.31a1 1 0 0 1-.564.18l-2.225.408.99-2.282a1 1 0 0 1 .367-.448l1.777-1.372-1.85-.34a1 1 0 0 1-.743-.558L10 3.32zm0 9.438a1 1 0 0 1 .238.03l2.362.434-1.702 1.31a1 1 0 0 1-.564.18l-2.225.408.99-2.282a1 1 0 0 1 .367-.448l1.777-1.372-1.85-.34a1 1 0 0 1-.743-.558L10 12.758z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-gray-600 text-sm">{avgRating} stars</p>
        </div>
        <p className="text-gray-700 text-lg font-semibold">{costForTwo}</p>
        <p className="text-gray-700 text-sm">{sla.slaString}</p>
      </div>
    </div>
  );
}

export default Card;
