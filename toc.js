(function(){
  var el = document.querySelector("#toc");
  var titleEls = document.querySelectorAll("h2");
  var titles = Array.from(titleEls);

  var tocItems = [];

  titleEls.forEach(function(title, index){
    var id = `#${index}`;
    title.setAttribute("id", index);
    var link = document.createElement("a");
    link.setAttribute("href", id)
    link.innerText = title.innerText;
    var listItem = document.createElement("li");
    listItem.append(link);
    el.append(listItem);
  });
  console.log(el, titles);
}())

