import React from "react";

const FreeCourseCard = (props) => {
    const {imgUrl,title,students,rating} = props.item

  return (
    <div className="single_free_course">
      <div className="free_course_img mb-5">
        <img src={imgUrl} alt="" className="w-100" />
        <button className="btn btn-info free-btn">Free</button>
      </div>
      <div className="free_course_details mb-2">
        <h6>{title}</h6>
        <div className="d-flex align-items-center gap-5">
          <span className="d-flex align-items-center gap-2">
            <i class="ri-user-line"></i>{students}k
          </span>
          <span className="d-flex align-items-center gap-2">
            <i class="ri-star-fill"></i> {rating}k
          </span>
        </div>
      </div>
    </div>
  );
};

export default FreeCourseCard;
