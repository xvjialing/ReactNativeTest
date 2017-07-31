#### *flexDirection*
flexDirection可以决定布局的主轴。子元素是应该沿着水平轴(row)方向排列，还是沿着竖直轴(column)方向排列呢？默认值是竖直轴(column)方向。

    对应的这些可选项有：column,row
    row：主轴为水平方向，起点在左端。
    row-reverse：主轴为水平方向，起点在右端。
    column(默认值)：主轴为垂直方向，起点在上沿。
    column-reverse：主轴为垂直方向，起点在下沿。

#### *justifyContent*
justifyContent可以决定其子元素沿着主轴的排列方式。

    对应的这些可选项有：flex-start、center、flex-end、space-around以及space-between
    flex-start(默认值)：伸缩项目向一行的起始位置靠齐。
    flex-end：伸缩项目向一行的结束位置靠齐。
    center：伸缩项目向一行的中间位置靠齐。
    space-between：两端对齐，项目之间的间隔都相等。
    space-around：伸缩项目会平均地分布在行里，两端保留一半的空间。

#### *AlignItems*
alignItems可以决定其子元素沿着次轴（与主轴垂直的轴，比如若主轴方向为row，则次轴方向为column）的排列方式。

    对应的这些可选项有：flex-start、center、flex-end以及stretch。
    flex-start：交叉轴的起点对齐。
    flex-end：交叉轴的终点对齐 。
    center：交叉轴的中点对齐。
    baseline：项目的第一行文字的基线对齐。
    stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度
    
#### *flexWrap*
    
    对应的选项：`nowrap | wrap | wrap-reverse`
    默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。
![img1](https://mmbiz.qpic.cn/mmbiz/57sLf8oUA1sI4h5lQz8OJtAKzIJvfAibD7XE0ZhFloNnQ3Ot7njgsFmicyYwWaibZaXwM0icCJqXPT96tFlrfNbGaw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

1. nowrap(默认值)：不换行。

![img2](https://mmbiz.qpic.cn/mmbiz/57sLf8oUA1sI4h5lQz8OJtAKzIJvfAibDrRQVLBRNWt0RKVWxDiaia5rCSwhvDfxQevBYDeeO0I2beUcjTjfMdguw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

2. wrap：换行，第一行在上方。

![img3](https://mmbiz.qpic.cn/mmbiz/57sLf8oUA1sI4h5lQz8OJtAKzIJvfAibDlTqUdZRJsBkk1weL4PPhsQbU3lQwMj0u8KyxdoWhQZoByZ9q4ib2NOg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)

3. wrap-reverse：换行，第一行在下方。（和wrap相反）(此属性不适用于react native,但适用于react)

![img4](https://mmbiz.qpic.cn/mmbiz/57sLf8oUA1sI4h5lQz8OJtAKzIJvfAibDYK3nnHib1YnnqCO6UfKSjofv8jhBRYQc3KXpoYt5FwyBamB3fD9xXDA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1)



>引入的类名一定要在前加入 export default,或者在最后使用module.exports=类名


#### Touchable系列组件

1. 高亮触摸  TouchableHighlight

2. 不透明触摸  TouchableOpacity

该组件封装了响应触摸事件；当点击按下的时候，该组件的透明度会降低。

- 常用属性
>activeOpacity  number:(0~1)

设置当用户触摸的时候，组件的透明度

#### 得到具体View对象
    <View ref="event"></View>
    //拿到View
    this.refs.event
    



