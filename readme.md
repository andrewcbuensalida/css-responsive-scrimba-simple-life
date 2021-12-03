CSS RESPONSIVE DESIGN:======================================================
laptop widths are 1200px, heights are 700px.
large mobile is 400px, height 800px
inline elements are not affected by width and height, slightly with padding, horizontally with margin. if you want it to be affected, should be inline-block.
put google fonts link including preload before the css link

units=================================================================
a tags inherit font size and weight but not other properties like color because they have default styles, same thing for headers.
percentage are mainly used for widths, they are relative to the parent. height is sometimes based on width.
for responsive, use max-width to prevent something from getting too big, like on images, containers,
if there's a width and a max-width, it gets the lower value.
for width, use em or %
for font-size, use rem. to prevent exponential.
em are relative to PARENTS font size while rem are relative to the ROOT which is html{}
but if it's a different property other than font-size, such as padding, em are relative to the font size of the element itself.
1.5rem = 150%
default on browsers is 16px font-size.
padding and margin use em.
borders use px
use % if you know how many total columns and dividing divs among it

flex=====================================================================
normally, divs will have 100% width of the container (even if we set width to less than 100%) and stack vertically, but with display flex, theyll be side by side horizontally, and width will only be it's content, and the height will be 100%.
if you do align-items:flex-start, the height will shrink to fit content only
<selector>:last-child applies to the last of the that selector, not the last child that's a child of that selector.
usually have margin: 0 on the body
to change the width of columns, could do the bootstrap way of giving a column a class col-2 which means it takes 50% of the container assuming total number of containers is 4. col-3 would take 75% of the container.
or give it flex:.25 for a width of 1 column, flex:.5 for a width of 2 columns, etc again assuming total columns is 4.

media query==================================================================
make media queries based on when the layout breaks, not based on device screen sizes.
if doing mobile first,
@media (min-width:650px){

<!-- desktop styling -->

}
note that the bigger min-width is below smaller one to work
if doing desktop first, do this below the desktop styling. media queries always after the selector that you want to change.
@media (max-width:675px){

<!-- mobile styling -->

.column{
flex-direction:column
}
.col{
90%
}
}

==============================================================================
always have a a:focus if you have a a:hover
separate typography from layout
put tag selectors first, then class selectors.
bolder or strong tags jump to the next available font-weight while bold jumps to 700.
typography first, then big layout
almost every website, have this:
img{
max-width:100%;
display:block;
}
this is because images are by default inline, so it has a little bit of extra space at the end or something like that. a good reset to put on the top is:

-   means select every element.
    \*{
    box-sizing:border-box;
    }
    body{
    margin: 0;
    color: #404040;
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.125rem;
    font-weight: 300;
    line-height:1.6 //this means 1.6 times bigger than font size. this is inherited. 1 .4 is default.
    }
    use <main> for the central column, and <aside> for sidebar widgets.
    in flexbox, margins dont collapse anymore in direct children.

===========================================================================
viewport meta tag
to prevent phones from shrinking the content even if we have media queries, include this in the head section of the document

<meta name="viewport" content="width=device-width, initial-scale=1">

=====================================================================
text-transform: uppercase makes it all caps,
text-transform: capitalize makes the first letter of the words caps
letter-spacing: 1px is the horizontal spacing
line-height: 1.6 is the vertical spacing

background-image ==============================================================
background-image if there's anything on top, if not, use image
syntax for background-image
background-image: url(myFolder/myImage.jpg);
by default, background-image tiles, aka repeats if the content is big enough. otherwise, the size of the image just fits the content.
these are useful:
background-position: center;
background-size: cover;

============================================================================
box-sizing:border-box makes the sizes include the border and padding, not just the content
inputs by default are not border-box, buttons are not
pseudo classes, like :last-child only will apply if that element is the last child. it doesnt mean select the last child of that element.

h1 p { } means select all the p inside h1.
h1 > p { } means select the p's that are direct children of h1 BUT classes are better because what if markup changes
h1 + p { } means select the p if it is a sibling immediately after the h1
h1, p { } means select h1's and p's
h1 ~ p { } select all p's if it's a sibling to h1 and the p comes after

whenever you have a background image, suggested to have background color, just in case the image doesn't load, so you can see the text still if the text was white.
background image is always on top of background color.
dont make line width too wide. maky it around 530px.
larger screen sizes should have a little bit bigger font sizes, like 1.125rem

viewport===============================================================================
if you put a percentage for height, it doesnt work because the parent, if it's the body, is always changing, unless the parent(body) has an absolute value.
if height is too short, content will overflow. can set the overflow to scroll or hidden.
that's why setting height isn't usual.
75vh means 75% of the viewport height
vmin and vmax are weird. vmin is based on whatever is smaller, width or height.
if setting a 100vh, do min-height, not just height. so that if user squashes browser, image wont get too short.
if you're scrolling even if it's 100vh, probably because it's not box-sizing: border-box. that's because the size is not yet adding border and padding.

forms =========================================================================================
<label for="myNameID">Name:</label>
<input id="myNameID" type="text">
OR can wrap input inside label so don't need to have 'for'
button type="button" doesn't submit the form, but if there was no type, or the type was submit, it would submit.
value is what's inside the input.
placeholder is inside the input but disappears once typing.
and disabled
attribute selector is like input[type="text"] will only select inputs with attribute type of text
text properties arent inherited in forms so usually put this in forms:
input {
font-family: inherit;
text-align: inherit;
border: 1px solid #404040;
border-radius:5px;
}
==================================================================
gradients are actually background-images
syntax is
background-image: linear-gradient(red,blue); can replace linear with radial
this will make div on top red, going down blue.
(to right,red,blue) makes left red, right blue.
(45deg, red, blue) from lower left to upper right
(0deg, red, blue) from bottom to top. so the degrees goes clockwise
(to bottom right, red, blue) from top left to bottom right
(90deg,red 75%, blue) from left to right, will be pure red for 75% of the space and then will start to turn blue.
for buttons; rule of thumb, top and bottom padding should be smaller than left and right, so
.btn{
display:inline-block;
padding: .75em 1.5em;
cursor:pointer;
border:0;
transform:scale(1.05) makes it 150% bigger, but doesn't affect the flow, so other elements don't know it got bigger, but visually it did.
transition: transform .25s
}
transition =============================================================================
can only transition some properties
it's basically how fast a property changes when hovering or clicking etc
transition: color 1s; means whenever the color changes, take 1s.
there's also delay which is how long before it starts, and timing-function which is how it accelerates.
difference with animation is animation doesn't need user initiation.
put transition on the element's normal state, not it's hover state.

transform==================================================================
transform:translate()
transform:scale(1.5) makes it 150% bigger, but doesn't affect the flow, so other elements don't know it got bigger, but visually it did. the element ends up going on top of other elements.

===================================================================================
border-image: linear-gradient(to left, red, blue) 1; borders can have a background-image as well. the 1 at the end means the image will stretch along the border, without the 1 means image will be on all 4 corners.

background blend mode ====================================================================
needs background-image and a background-color, or two background-images
background-blend-mode:multiply keeps dark pixels
:screen keeps light pixels
:overlay keeps neutrals ///not really used much

this is different from mix-blend-mode, which is the blending of the element and elements behind it. doesn't matter if it's siblings, or descendants. mix-blend-mode has to be applied to the element on the top. this is how to do knockout/cutout text. cant do that with background-blend-mode.
for a white background and text that has the image inside, element with text has to be on top, color:black, mix-blend-mode: screen, background-color:white.
for a black background with the text with the image inside, text on top, background-color:black; color:white; mix-blend-mode:multiply;
mask-image only works on some browsers. so go for blend modes.
svg clip is more complicated.
background-blend-mode is between the background-image and the background-color within one element.
the background-image is sort of like a child of the element when it comes to z-index. that's why if sibling A has z-index of 100 and a background-image, and sibling B has z-index
position:absolute turns block elements into inline
can combine background-image:url(...), linear-gradient(45deg,red,blue);

flexbox=================================================================================
if flex-wrap:nowrap if there's too many, it will shrink to the size of the element including margin, then just overflow.
if flex-wrap: wrap it will go until the width of the container, then go to the next line.
flex-flow combines flex wrap and flex direction into one line.
justify-content: left is the same as flex-start, right as flex-end;
space-between is more used than space-evenly is more used than space-around.
default of align-items, the vertical height, is stretch.
align-items: baseline aligns the first line of text.
justify-content is main axis, left and right, if default flex-direction which is row.
align-items is cross axis, up and down. this is at the row level.
align-content:center is the for all the contents rows as a whole if it were to wrap, itll be all in the middle vertically. less commmon to use this.
align-self:center is placed in the actual element, not parent, to align itself wherever.
in each sibling, can put a flex:.2 , flex:.6, flex:.2 as long as it adds up to 1, signifies the proportion of extra space they take.
flex-grow:2 means itll grow twice the speed of an element that has flex-grow:1. default is 0, wont grow.
flex-shrink:2 means itll shrink twice as much as an element with flex-shrink:1. default is 1, but 0 wont shrink.
flex-basis is the ideal width, default is auto, means if there's no width, itll default to the content width, if there is a width, flex-basis will be the width. or can override it. this difference with width and flex-basis, is flex-basis is working on the main axis.
flex: combings the grow, shrink, basis. default is 0 1 auto.
flex: 1 is short for grow:1, flex-basis:0.
flex: auto is short for grow:1 shrink:1 basis:auto.
a common pattern to put on a main thing is flex:1 0 auto.
in flex, margin-top and bottom auto will center vertically.
when changing the flex-direction of an image, use flex-basis instead of width. but to fix the bug, have to include min-width:0 and min-height:0.
backgrounds on the body are misleading because they fill up the whole space. but border on the body just fills up the content, if height and width not defined.

grid ============================================================================
better than flex for layouts.
like flex, margins dont collapse.
grid-template-columns: 1fr 1fr 2fr means there's going to be 3 columns, the first is 1/4 the width, second is 1/4, and third is half. this should be on the container.
grid-template-rows:2fr 3fr same deal but with rows
grid-template: <rows fr> / <column fr>
on the grid item, grid-row-start:1; grid-row-end:3; means that element should start on the top line and end on the third line. this can also be written as:
grid-row: 1/3;
if two elements take the same grid, they overlap.
if you do grid-column: 1/5 but there's only 4 lines, it'll overflow once, but if you do 1/6, it'll stay at 1/5. weird.
grid-column: -2/-1; means start from the second to the last line, to the last line.
grid-column:1/-1; might be useful if you just want it to span the whole width and not worry about counting the number of columns.
grid-column: 2 / span 2; means start from line 2 and have a length of 2.
grid-template-row: 50px auto; means first row will be 50px then second row will be height of the tallest item in that row.
align-items:start; acts like flex, but will be applied to each row. so when there's an item that was stretching vertically, it wont and just stick to the top.
justify-citems: start; if item was stretching horizontally, it wont anymore and just stick to the left.
align-self and justify-self: start and end and center. align-self is more used in grid than in flex. flex doesn't have justify-self.
grid-area: 2 / 1 / span 2/span 3; start on row 2, and span 2, start on column 1 and span 3. basically combines grid-row and grid-column.
giving an item width:100% and height:100% means 100% of their grid cell they're inside of, not of the parent.
grid-row:3; means start at 3 and take up a span of 1, so default is 1.
to create padding, create an extra empty grid row and column of 1em and make that as the padding. OR could use grid-column-gap:1em; meaning there will be a gap of 1em IN between the columns. no gap on the outsides. if you want it on the outside too, hacky add a 0px column on the outside.
grid-gap: 1em 2em; 1em space between rows, 2em space IN between columns.
if you dont define enough rows and columns, the extra items take up implicit rows and columns. these implicit rows and columns default to auto.
could set the width and heigh of these implicit rows and columns with:
grid-auto-rows:500px; means the height of the implicit rows will be 500px.  
grid-auto isn't used much.
grid-template-columns: 150px 150px 200px;
grid-template-areas:
"header header header"
"sidebar content content"
"footer footer footer";
another use of grid-area is to assign item to cells. so if grid-area: header; the selected element will take up the header. the thing is, cant have weird shapes like T shapes or L shapes, just rectangles. this is the better use of grid-area.
minmax(100px,300px) is exclusive to grid. always make sure it's smaller on the left, bigger on the right. grid-template-columns: 100px minmax(100px, 300px) 100px 100px; means the second column minimum width is 100px and max is 300px.
using fr as the unit, for example grid-template-columns: 1fr 2fr; it acts like flex:1 1 auto; it takes up the available space in proportion. easiest way to create columns of equal sizes.
so instead of:
grid-template-columns: minmax(50px, 500px) minmax(50px, 500px) minmax(50px, 500px);
could just do:
grid-template-columns: 1fr 1fr 1fr;
so use fr alot. the downside is cant use a minimum size. so cant have :
grid-template-columns: 200px 200px minmax(1fr, 500px);
min-content is a unit that makes the size the smallest possible size of the content, so if the content is "hello my name is Mr. Love", the width will be as wide as "hello" because that's the widest word.
max-content shrinks the size to the size of it if it didn't wrap.
grid-template-columns: repeat(4, 300px); means 4 columns of 300px.
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); when the screen is wide enough,
it'll fit the most number of columns it can, but when the minimum width of 200px is reached when shrinking the screen, it will remove a column. kind of like what flex does.
auto-fill will keep adding new columns, even if they are empty.
auto-fit will fit the columns you've defined into the available space. aka if there are 2 items, and you start widening, 1 column will become 2, then stay that way even if you widen some more, so auto-fit is more useful than auto-column.
grid also has order:
grid-auto-flow: dense; pulls everything up if there are empty cells.
position ==================================================================================
position: absolute removes the element from the flow, so everything else shifts, while translate(100px,100px); doesn't remove the element from the flow, so everything stays the same, except visually the element moved.
translateX(-100%) moves it left

box-shadow: 30px 20px 40px 50px black; doesn't affect the flow of the document, move the shadow 30px to the right, move it down 20px, 40px how big is the blur, 50px how far until i start the blur, black color.
box-shadow: 5px 5px 0px black,10px 10px 0px yellow; would do 2 box-shadows.

::after adds a pseudo element after the content inside the element.
.section-title::after{
content:"hello"; this is needed. most of the time is blank ""
display:block;
}
this will display "hello" after the content inside .section-title

forms==========================
<label for="lname">Last Name</label>
<input id="lname" type="text">

    <label for="message">Message</label>
    <textarea id="message"></textarea>

textareas need a closing tag. and can expand. it's not input tag.
textareas can have resize:none;

i kind of llike flexbox better than grid.

deploy simple life website flex, barbeque signup flex, 7 tech tips flex version, jake elwood grid.

dynamically rendering ==========================================
ways:
ssr like handlebars, ejs
react
innerHtml injection from javascript
element creation with javascript
conditional rendering with template tags
jquery load from a different html file
