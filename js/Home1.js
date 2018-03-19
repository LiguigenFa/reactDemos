//引入我们的React和ReactDom模块
var React = require("react");
var Home1 = React.createClass({
	render:function(){
		return(
			<div >
				我是首页1
			</div>
		)
	}
})
//暴漏出去，你想用，你就拿去（但是你要require来用我）
module.exports = Home1;