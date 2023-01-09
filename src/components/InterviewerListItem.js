import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {

  const interviewerClass = classNames("interviewers__item", { "interviewers__item--selected": (props.selected === true) })

  return (
    <li onClick={() => { props.setInterviewer(props.id) }} key={props.id} className={interviewerClass}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected ? props.name : ''}
    </li>
  );
}