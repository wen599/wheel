# html常用标签
## 1.a标签的用法
* a标签的作用：    
   * 跳转到外部页面    
   * 跳转到内部锚点     
   * 跳转到邮箱或者电话
* herf属性:超链接的地址     
  * 取值范围： 
      * 网址：      
          1 https://lxw599.top     
          2 http://lxw599.top       
          3 lxw599.top      
          4 注意：建议用最后一种，它会自动分辨是http还是https
      * 路径     
          1  /a/b/c     
          2  a/b/c      
          3  index.html以及index.html
      * 伪协议：JavaScript：代码;
      * maito:邮箱
      * tel:手机号码
      * #id值   可以跳转到这个id的元素
* target 目标窗口   
    1 _blank    在空白窗口打开  
    2 _top 顶层窗口打开     
    3 _parent 父窗口打开    
    4 _self  在本窗口打开   
    5 字符串   下次以这个字符串为名字打开一个窗口，再次点击还是这个窗口     
    6 iframe的name
* rel=noopener 好像可以修复一个bug
## 2.table标签的用法
*  table变迁的子标签  
   *  thead 表头
   *  tbody 表身
   *  tfoot 表脚
   *  tr 行
   *  th 表头
   *  td 列
* 相关样式  
    * table-layout 控制表格的宽度
    * border-collapse 合并表格
    * border-spacing 表格的间隔     
* 做个表格实例吧
````html

<table>
    <thead>
        <tr>
            <th></th>
            <th>语文</th>
            <th>数学</th>
            <th>英语</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>lxw</th>
            <td>50</td>
            <td>59</td>
            <td>45</td>
        </tr>
        <tr>
            <th>lyl</th>
            <td>51</td>
            <td>55</td>
            <td>75</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <th>总计</th>
            <td>150</td>
            <td>150</td>
            <td>120</td>
        </tr>
    </tfoot>
</table>
````
## img标签
* 作用：发出get请求，展示一张图片
* 属性：
  * alt 是图片找不到的时候显示的内容
  * height 图片的高度
  * width  图片的宽度
  * src  图片的路径
* 事件：
    * onload 加载完成
    * onerror 发生错误
* 响应式：样式  
    `max-width:100%`
