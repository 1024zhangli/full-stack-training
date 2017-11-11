https://choosealicense.com/
https://gitee.com/oschina/git-osc/wikis/pages?title=License&parent=

## BSD
Berkeley Software Distribution，伯克利软件发行版本
使用者可以自由的使用、修改源代码，亦可将修改后的代码作为开源软件或者专有软件再发布。

使用约束：
1. 用了BSD许可的源码的产品，在发布的产品源码中要带上原来的BSD License；如果是类库或者软件，需要在文档或者版权声明中包含原来的BSD License.
2. **不能用**BSD许可的源码作者、机构、产品名称来**做自己产品的市场推广**.

简单的说:你的产品中用了BSD许可的源码，你的产品可以用其他协议，可以开源，可以闭源商用，但是得带上它原来的BSD License；另外也不能借它的任何名义推广你的产品。

## Apache　v2 License
类似于BSD，允许修改代码，再作为开源或者商业软件再发布、销售，商业友好。
使用约束：
1. 需要提供一份代码给[Apache License](http://www.apache.org/licenses/LICENSE-2.0)
2. 如果你修改了代码，需要再被修改的文件中说明
3. 再修改后的和有源代码衍生的代码，需要带有原来代码中的License、商标、专利声明和其他原来作者规则所要包含的说明。
4. 发布的产品如果包含一个Notice文件，则在Notice文件中需要带有Apache License。可以在Notice文件中增加自己的许可，但不可以对Apache License的要求进行修改。

## MIT License
跟BSD类似，源码作者只想保留版权，没有其他限制，商业软件可以使用，也可以修改MIT License协议的代码，甚至它的代码。简单的说，你必须在你发行的版本里包含它原来的MIT License就可以了。

MIT与BSD本质的不同是，MIT授权的条款不属于copyleft自由软件的授权条款，可以在自由/开放源码软件或者非自由软件上使用；而BSD的授权条款是属于自由软件的。

## GPL
GNU General Public License的缩写。
目的：项目的代码的开源、免费使用；引用、修改、衍生后的代码也要开源和免费。不允许修改后、衍生的代码作为闭源的商业软件发布和销售。
传染性：使用了GPL许可的产品的软件也必须使用GPL许可，即必须是开源和免费的。
例如：linux

对于商业产品，或者对代码有保密要求的产品，就不适合采用GPL许可的产品作为类库和二次开发。

## Affero GPL
是一个自由软件特许条款

## LGPL
### LGPL v2.1
GNU Lesser General Public License的缩写。
目的：是GPL的一个主要为类库使用而设计的开源协议。LGPL允许商业软件通过类库引用的方式使用LGPL许可的产品，不需要开源商业软件代码，并且可以发布和销售。

如果修改或者衍生LGPL许可的代码，那么所有修改的代码、涉及修改部分的额外代码、以及衍生代码都必须采用LGPL许可。说人话：商业软件可以用，但不能修改人家的LGPL许可的代码，改了人家的代码，你就得要开源。
### LGPL v3
相对于LGPL v2，不仅要求用户公布修改的源代码，还要求公布相关硬件。
