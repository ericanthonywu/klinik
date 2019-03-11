// = Class definition

var FormControls = ()=> {
    //== Private functions

    var tmbhobat = ()=> {
        $( "#m_form_tambah_obat" ).validate({
            // define validation rules
            rules: {
                nama: {
                    required: true
                },
                jenisobat: {
                    required: true
                },
                bpjs:{
                    required: true
                },
                harga: {
                    required: true,
                    digits: true
                }
            },

            //display error alert on form submit
            invalidHandler: function(event, validator) {
                mUtil.scrollTo("m_form_2", -200)

                /*
                swal({
                    "title": "",
                    "text": "There are some errors in your submission. Please correct them.",
                    "type": "error",
                    "confirmButtonClass": "btn btn-secondary m-btn m-btn--wide"
                })
                */
            },

            submitHandler: function (form) {
                //form[0].submit() // submit the form
            }
        })
    }

    return {
        // public functions
        init: () => {
            tmbhobat()
        }
    }
}

jQuery(document).ready(function() {
    FormControls.init()
})