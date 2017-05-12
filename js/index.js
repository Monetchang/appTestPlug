$(function(){
	addKeyWord(); //添加字段函数
	delKeyWord(); //删除字段函数
})


//添加字段函数

function addKeyWord(){
	$('#add_key').click(function(){
		console.log('Add Key Success！');
		var parent = $('#parent_box');
		var childPart = $('<tr>\
  								<td>\
  									<div class="input-group">\
  										<input type="text" class="form-control" placeholder="请输入设备key值" aria-describedby="basic-addon2">\
									</div>\
  								</td>\
  								<td>\
  									<div class="input-group">\
  										<input type="text" class="form-control" placeholder="请输入对应value值" aria-describedby="basic-addon2">\
									</div>\
  								</td>\
  								<td>\
  									<div class="removeTd delete_key">\
  										<i class="iconfont">&#xe600;</i>\
  									</div>\
  								</td>\
  							</tr>');
		childPart.addClass('childPart')
		childPart.appendTo(parent);
	})
}

//删除字段函数

function delKeyWord(){
	$(document).on('click', '.removeTd', function() {
		console.log('Delete Key Success！');
		$(this).parents('tr').remove();
	});
}

