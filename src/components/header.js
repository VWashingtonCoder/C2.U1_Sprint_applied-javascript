// TASK 1
// ---------------------
// Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
//
//  <div class="header">
//    <span class="date">{ date }</span>
//    <h1>{ title }</h1>
//    <span class="temp">{ temp }</span>
//  </div>
//
const Header = (title, date, temp) => {
  // instantiate
  const divHeader = document.createElement("div");
  const spanDate = document.createElement("span");
  const h1Title = document.createElement("h1");
  const spanTemp = document.createElement("span");
  // set up structure
  divHeader.appendChild(spanDate);
  divHeader.appendChild(h1Title);
  divHeader.appendChild(spanTemp);
  // add classNames
  divHeader.classList.add("header");
  spanDate.classList.add("date");
  spanTemp.classList.add("temp");
  // add textContent
  spanDate.textContent = date;
  h1Title.textContent = title;
  spanTemp.textContent = temp;
  //return
  return divHeader;
}
// TASK 2
// ---------------------
// Implement this function taking a css selector as its only argument.
// It should create a header using the Header component above, passing arguments of your choosing.
// It should append the header to the element in the DOM that matches the given selector.
//


const headerAppender = (selector) => {
  const headerInfo = Header("A Brief Project", "2/11/2022", '58')
  const position = document.querySelector(selector)
  position.appendChild(headerInfo);
}

export { Header, headerAppender }
