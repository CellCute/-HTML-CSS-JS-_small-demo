/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-03-31 20:07:35
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-04-01 15:17:05
 * @FilePath: \Code\50projects50day\3-Rotating Navigation Animation\script.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var btn_1 = document.getElementById('btn_1');
var btn_2 = document.getElementById('btn_2');
var m_b = document.getElementById('main_b1');
var c_b = document.getElementById('circle_b2');
var li_1 = document.getElementById('li_1');
var li_2 = document.getElementById('li_2');
var li_3 = document.getElementById('li_3');
btn_1.onclick = function () {
    m_b.className = 'main_box anima1';
    c_b.className = 'circle_nav anima2';
    li_1.className = 'li li-1';
    li_2.className = 'li li-2';
    li_3.className = 'li li-3';
}
btn_2.onclick = function () {
    m_b.className = 'main_box anima1-b';
    c_b.className = 'circle_nav anima2-b';
    li_1.className = 'li li-1-1';
    li_2.className = 'li li-1-1';
    li_3.className = 'li li-1-1';
}