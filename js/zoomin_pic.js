function zoomin_pic(unique_id) {
	// Get the modal
    id_modal = "myModal" + unique_id;
    id_img = "img" + unique_id;
	var modal = document.getElementById(id_modal);

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementsByClassName("myImg")[0];
	var modalImg = document.getElementById(id_img);
	var captionText = document.getElementsByClassName("caption")[0];
	img.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = this.alt;
	};

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	  modal.style.display = "none";
	};
}
