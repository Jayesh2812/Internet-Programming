import os
import re
def getTitle(s):
    # print(s)
    for i in s:
        if i.find("title") != -1:
            return(i[i.find(">")+1:i.find("<",6)])
        


dirs = [ dir for dir in os.listdir() if os.path.isdir(dir) and dir[0]!='.' and dir!="Navbar"]

readme = open("README.md",'w')
index = open("index.html",'w')
navbar_data = "<h3><span> IP Assignments</span></h3>\n"
readme.write('# <a href="https://jayesh2812.github.io/Internet-Programming/">Internet-Programming</a>\n')
index.write('<h1> <a href="https://jayesh2812.github.io/Internet-Programming/">Internet-Programming</a></h1>\n')
index.write('<ol>\n')
readme.write('<ol>\n')
for dir in dirs:
    html = open(f"{dir}/index.html")
    code = html.readlines()
    title = getTitle(code)
    readme.write('\t<li> <a href="'+dir+'">'+title+'</a></li>\n')
    index.write('\t<li> <a href="'+dir+'">'+title+'</a></li>\n')
    navbar_data += '\t<li> <a href="../'+dir+'/">'+title+'</a></li>\n'
readme.write('</ol>\n')
index.write('</ol>\n')
index.close()
readme.close()



navbar = open("./Navbar/navbar.js",'r+')
data = "".join(navbar.readlines())
navbar.seek(0)
navbar.truncate()
navbar.write(data[:data.find("<ul>")+4] +navbar_data+ data[data.find("</ul>"):])