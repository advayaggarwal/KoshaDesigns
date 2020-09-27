// For full API documentation, including code examples, visit https://wix.to/94BuAAs
import {product} from 'backend/authenticateProduct';
$w.onReady(function () {
	// TODO: write your page related code here...

});

//import {First_DB} from 'backend/aws-sdk';
export function check_click(event,$w) {
	product($w("#input1").value)
  		.then(productId =>{
			  console.log(productId);
			 $w("#text7").text = `
  									Location- ${productId.Location}
									Date- ${productId.Date}
									id- ${productId.id}
									Artisian- ${productId.Artisian}
									Product Name- ${productId.product_name}
									Media- ${productId.media}`
									//JSON.stringify(product)
			})
			.catch(function(error){
				$w("#text7").text = `Invalid Product Id`
			});
}
