import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const renderReadTime = () => {
    if (!minutes) return null;

    let indicator = "";
    const roundedTime = Math.ceil(minutes / (minutes < 30 ? 5 : 10)) * (minutes < 30 ? 5 : 10);
    const emoji = minutes < 30 ? "☕️" : "🍱";
    const count = Math.ceil(roundedTime / (minutes < 30 ? 5 : 10));

    for (let i = 0; i < count; i++) {
      indicator += emoji;
    }

    return `${indicator} ${minutes} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} {minutes !== undefined && `(${renderReadTime()})`}
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;