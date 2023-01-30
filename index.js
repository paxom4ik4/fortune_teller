const firstReview = "Феноменальная <br />cпотомственая <br />ясновидящая, торолог, <br /> целитель от Бога. <br /> <p>Анастасия</p>";

const secondReview = "Другие обещают <br /> - она реально помогает <br /> <p>Мигель</p>";

const thirdReview = "Сняла порчу и <br /> зарядила на удачу <br /> всего за один сеанс <br /> <p>Жанбырбай</p>";

const reviewContainer = document.querySelector(".into_text_container");

const firstReviewNode = document.createElement("div");
firstReviewNode.innerHTML = firstReview;
firstReviewNode.className = "child_text";
const secondReviewNode = document.createElement("div");
secondReviewNode.innerHTML = secondReview;
secondReviewNode.className = "child_text";
const thirdReviewNode = document.createElement("div");
thirdReviewNode.innerHTML = thirdReview;
thirdReviewNode.className = "child_text";

const reviewItems = [firstReviewNode, secondReviewNode, thirdReviewNode];

const MAX_ITEM_INDEX = 2;

let currentItem = 0;

const changeReview = () => {
  const childText = reviewContainer.querySelector(".child_text");
  reviewContainer.removeChild(childText);

  reviewContainer.appendChild(reviewItems[currentItem]);

  if (currentItem === MAX_ITEM_INDEX) {
    currentItem = 0;
  } else {
    currentItem += 1;
  }
};

setInterval(() => {
  changeReview();
}, 3000);