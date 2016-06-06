var inserting = document.getElementsByTagName("button");
inserting[1].setAttribute("onclick", "answer_2()");
inserting[2].setAttribute("onclick", "answer_3()");
inserting[3].setAttribute("onclick", "answer_4()");


function answer_1() {
  document.getElementById("q1-answer").innerHTML = "<ul><li>D - Document</li><li>O - Object</li><li>M - Model</li></ul>";
}
function answer_2() {
    document.getElementById("q2-answer").innerHTML = "<ul><li>Javascript can change HTML such as elements,attributes and CSS style by accessing DOM</li><li>Javascript can react to events happening in a page</li>";
}
function answer_3() {
    document.getElementsByClassName("q34-answer")[0].innerHTML = "<ul><li>Parent node : A node directly above a node</li><li>Child nodes : Nodes one level directly below</li><li>Sibling nodes : Nodes at the same level (same parent node)</li><li>Descendant nodes : A set of nodes any number of levels below another node</li><li>Ancestor nodes : A set of nodes above a node in a tree</li>";
}
function answer_4() {
    document.getElementsByClassName("q34-answer")[1].innerHTML = "<ul><li>document.getElementById() : Returns an element with a given ID_NAME and only one elements can be returned because HTML file can have one id. </li><li>document.getElementsByClassName : Get a list of elements based on the class name and many elements can be returned because we can apply same classname in HTML file. </li><li>document.getElementsByName : Get a list of elements based on the name and usually Name is generally used with input tag. and many elements can be returned because we can apply same name in HTML file.</li><li> document.getElementsByTagName : Get a list of elements with the input tag name  many elements can be returned</li>";
}
$('div>a').click(function () {
    $(this).prev('a').text("Answer5");
    $(this).text("Answer5");
    $(this).next('a').text("Answer5");
});
$('div>.item').click(function () {
    $(this).prev('div').css('font-size', '3em');
    $(this).css('font-size', '3em');
    $(this).next('span').css('font-size', '3em');
});
$('div>div.demo').dblclick(function () {
    $(this).prevAll('div.demo').css('color', 'blue');
    $(this).css('color', 'blue');
    $(this).nextAll('div.demo').css('color', 'blue');
});


