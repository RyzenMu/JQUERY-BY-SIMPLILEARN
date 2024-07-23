1.fadeToggle(3000).
2.$('div').css("background-color", "orange")
3.$('#div3, li, a, .main').css() --> jQuery is ease to work on multiple elements.
4. ready function is called only after the html document is loaded.
5. event : dblclick
6. mouseenter
7. mouseleave
8. hover = mouseenter + mouseleave
9. hover requires two functions as parameters
10 fade in and fade out and fade toggle are animations.
11. zoom in and zoom out are animations
12. hide and show are animations
13. .hide()
14. .show()
15. no setTimeOut() required for toggle, hide and show.
16. just input milliseconds as a parameter.
17. fadeIn(2000)
18. fadeOut(2000)
19. fadeToggle(2000)
20. slide effect is an important animation.
21. stop() --> stops the animation.
22. stop() is without a delay parameter.
23. animate() is used for animation.
24. animate({css}, delay, callback) has three parameters.
25. animate has properties like left, right, top and bottom.
26. callback function is a function called by another function when that function gets executed.
27. slide Animation is mostly used animation.
28. chaining is most commonly used in jQuery.
29. ().html is the innerHTML
30. ().text is the innerText.
31. attr(). is the attribute
32.attr('class') will return the attribute.
33. attr('class', 'djf') will set the class attribute to dfg. 
34. append and prepend.
35. before and after methods
36. append and prepens with insert elements within the element.
37. before and after with insert elements before and after the current element.
38. remove and empty
39. remove removes the entire element.
40. empty removes only the text inside the element.
41. to get jquery-ui attach two files to the html 1. jquery-ui.js and 
42. jquery-ui.css
43. jquery-ui.structure.css
44. jquery-ui.theme.css
45. jquery-ui file added after plain jquery.js
46. main.js file added after jquery-ui.js file
47. widget is an application or an component of an interface that enables an user to perform a action or service.
47a. date picker is an important jQueryUi widget.
47b. customization of date picker will be found in documentation.
48. tooltip is an important widget.
49. customization of tool tip will be found in jquery documentation.
50.  show effects found in tooltip are slidedown, highlight, pulsate.
51. hide effect found in tooltip are explode, 
52. title attribute is important in tool tip input tag.
53. tooltip is mostly used for information on images.
54. accordion is an important widget
55. for accordion main div have the selector, sub divs with h2 and div (for description).
56. accordion can be customizable like collapsible, icons --> header, activeHeader, animate, event, 
57. the default event is the click in accordion.
58. Message box or dialog box is an important widget
59. it can be moved, closed and resizable.
60. simple contents inside simpple div can be converted into dialog box.
61. properties of dialog box are title, draggable, resizable, closeOnEscape, modal, autoOpen, 
62. to open dialog box on button click, select button and pass "open" as a parameter, $("#...").click(function(){ $("#dialog").dialog("open")});
63. Auto complete is an important widget in jQuery
64. link input text box to a array.
65. use source property inside autocomplete() method to link the array.
66. autocomplete has properties like delay, minLength, 
67. We can modify the widget properties with button clicks.
68. use the code as let modal = $('#dialog1').dialog('option', 'modal');
69. draggable is an important interaction.
70. customization for draggable are axis, cursor, opacity, containment, grid, snap, snapTolerence.
71. sortable is an important interaction.
72. sortable can be customized , they are opacity, cursor, containment, delay, distance, 
73. resizable is an important interaction.
74. customization for resizable are animate, containment, maxHeight, maxWidth,minHeight and minWidth, ghost, aspectRatio, 


















