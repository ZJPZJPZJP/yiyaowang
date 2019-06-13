
	!function(){
		var $allSort=$('.allSort')
		var $li=$('.allSort li')
		var $category=$('.category')
		$li.on('mouseover',function(){
			$category.eq($(this).index()).show().parent('li').siblings().children('.category').hide()
			$(this).addClass('stitle stitle_hover').siblings().removeClass('stitle_hover')
		})
		$li.on('mouseout',function(){
			$category.hide()
		})
		
		
			var $img=$('.y_slide_img')
			var $a=$('.tsSlideSwitch a')
			$a.on('mouseover',function(){
				$(this).addClass('y_slide_on').removeClass('y_slide_a').siblings('a').removeClass('y_slide_on').addClass('y_slide_a');
				$img.eq($(this).index()).show()
				
			})
			
		
			var $elevator_n=$('.elevator_n')
			var $in_floor_l=$('.in_floor_l')
			$(window).on('scroll',function(){
					//1.通过滚动条的距离控制楼梯导航的显示与隐藏
					var $top=$(window).scrollTop();
					
					if($top>=650&&$top<5500){
						$elevator_n.show();
					}else{
						$elevator_n.hide();
					}
			
			$('.in_floor_l').each(function(index,element){
						var $loucengtop=$(element).offset().top+300;
						if($loucengtop>$top){
							$('.elevator_n li').eq($(this).index()).addClass('current hove');
							console.log
						}
							
				})
			})	
				$('.elevator_n li').on('mouseover',function(){
					$(this).addClass('hover').siblings('li').removeClass('hover');
				})
				$('.elevator_n li').on('mouseout',function(){
					$(this).removeClass('hover');
				})
		
				$('.elevator_n li').on('click',function(){
					
					$(this).addClass('current hove').siblings('li').removeClass('current hove');
					var $top=$('.in_floor_l').eq($(this).index()).offset().top;
					$('html,body').animate({//这里给滚动条赋值，兼容写法
			    		scrollTop:$top
			    	});
				});
			
			
			
			
	
		
		
		
	}()
	
									