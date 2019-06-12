
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
			
		
		
		
		
	}()
	
									