const navLink = document.querySelectorAll(".nav-li");

navLink.forEach((link, index) => {
  link.addEventListener("click", () => {
    window.scrollTo({
      top: innerHeight * index,
      left: 0,
      behavior: "smooth",
    });
  });
});

// 1016 => innerHeight

window.addEventListener("scroll", navChange);

function navChange() {
  let elem = document.getElementsByClassName("current");
  const a = getSiblings(elem);
  if (window.pageYOffset < 952) {
    navLink[0].classList.add("current");
    navLink[1].classList.remove("current");
  } else if (window.pageYOffset < 952 + window.innerHeight * 1) {
    navLink[0].classList.remove("current");
    navLink[1].classList.add("current");
    navLink[2].classList.remove("current");
  } else if (window.pageYOffset < 952 + window.innerHeight * 2) {
    navLink[1].classList.remove("current");
    navLink[2].classList.add("current");
    navLink[3].classList.remove("current");
  } else if (window.pageYOffset < 952 + window.innerHeight * 3) {
    navLink[2].classList.remove("current");
    navLink[3].classList.add("current");
  }
}

const getSiblings = function (elem) {
  let siblings = [];
  let sibling = elem[0].parentNode.firstChild;

  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem[0]) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};
