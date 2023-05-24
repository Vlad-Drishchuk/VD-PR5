function task1(){
    let name =prompt('Як вас звати?', '');
    let profession = prompt('Яка у вас професія?','');
    let phone = prompt('Ваш номер телефону?','');
    document.write('<table>');
    for (let i = 0; i<12;i++){
        document.write('<tr>');
        for (let i = 0; i<3;i++) {
            document.write('<td>');
            document.write('<TABLE width="200" border="1" align="CENTER">');
            document.write('<TR><TD align="CENTER">');
            document.write(' <TABLE width="100%" border="0">');
            document.write(' <TR>');
            document.write(' <TD align="CENTER" valign="CENTER">');
            document.write(' <IMG src="images/visit_card.gif">');
            document.write(' </TD>');
            document.write(' <TD align="CENTER">');
            document.write(' <B>'+name+'</B><BR>');
            document.write(' <I>'+profession+'</I><BR>');
            document.write(' <FONT color="blue">'+phone+'</FONT>');
            document.write(' </TD>');
            document.write(' </TR>');
            document.write(' </TABLE>');
            document.write('</TD></TR>');
            document.write('</TABLE>');
            document.write('</td>');
        }
        document.write('</tr>');
    }
    document.write('</table>');

}

// Завдання 2
function autor1(){
    alert('Усвідомлена любов до свого народу не поєднується з ненавистю до інших.');
}
function autor2(){
    alert('Ті, що виїздять за море, міняють небо, а не душу.');
}
function autor3(){
    alert('Для нас дорогі батьки, дорогі діти, близькі, родичі; але всі уявлення про любов до чого-небудь поєднані в одному слові «вітчизна».');
}
function autor4(){
    alert('Мова — це глибина тисячоліть.');
}
function autor5(){
    alert('Той, хто в біді кидає свій народ, стає його ворогом.');
}

// Завдання 3
function task3(){
    const e = 2.718281828459045;
    const pi = 3.141592653589793;
    const LgE = 0.4342944819032518;
    const Log2E = 1.4426950408889634;
    const Ln10 = 2.302585092994046;
    const Ln2 = 0.6931471805599453;
    const sqrt2 = 1.4142135623730951;
    const sqrt1_2 = 0.7071067811865476;


}
