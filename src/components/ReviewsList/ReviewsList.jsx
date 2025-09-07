import { useSelector } from "react-redux";
import { selectCamperById } from "../../redux/campers/selectors";
import Review from "../Review/Review";

const ReviewsList = () => {
  const camper = useSelector(selectCamperById);

  if (!camper || !camper.reviews) {
    return null;
  }

  return (
    <ul>
      {camper.reviews.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </ul>
  );
};

export default ReviewsList;
