

(function($) {

	
carModels = {'Volkswagen':["GTI", "Bug", "Tiguan"], 'Audi':["S Class", "A Class", "RS Class"]}

$('#make-selector').on('change', function(element) {
  
  $('#model-selector').empty()
  chosenMake = this.value;
  
  
  for (makeIndex in carModels[chosenMake]) {
      
      model = carModels[chosenMake][makeIndex];
      model_option = '<option>{0} {2}<option>'.replace('{0}', chosenMake).replace('{1}', makeIndex + 1).replace('{2}', model);
      
      $('#model-selector').append(model_option)
  }
})

engineModels = {'GTI': ["1.8 T","2.0 T","3.0"], 'Bug':["1.5 T", "1.8 T", "3.0"]}

$('#model-selector').on('change', function(element) {
	$('#engine-selector').empty()
	chosenModel = this.value;

	for (modelIndex in engineModels[chosenModel]){

		engine = engineModels[chosenModel][modelIndex];
		engine_option ='<option>{0} {2}<option>'.replace('{0}', chosenModel).replace('{1}',modelIndex + 1).replace('{2}', engine);

		$('#engine-selector').append(engine_option)
	}
})





	"use strict";


  // Form
	var contactForm = function() {
		if ($('#contactForm').length > 0 ) {
			$( "#contactForm" ).validate( {
				rules: {
					partsTime: "required",
					make: "required",
					model:"required",
					name: "required",
					subject: "required",
					password: "required",
					email: {
						required: true,
						email: true
					},
					message: {
						required: true,
						minlength: 5
					}
				},
				messages: {
					partsTime: "  Please select a date you need the parts by  ",
					make: "  Please select a make  ",
					model:"  Please select a model  ",
					name:"  Please enter your name  ",
					password: "  Please enter a password  ",
					email: "  Please enter a valid email address  "
				},
				
			});
			
			
		}
		

		function logSubmit(event) {
			log.textContent = `Form Submitted, Thank you!`;
			event.preventDefault();
		  }
		  
		  const form = document.getElementById('contactForm');
		  const log = document.getElementById('log');
		  form.addEventListener('submit', logSubmit);
	};
	contactForm();

})(jQuery);
