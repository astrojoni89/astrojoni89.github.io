function zoomin_pic(unique_id) {
	// Get the modal
    id_modal = "myModal" + unique_id.toString();
    id_img = "img" + unique_id.toString();
	var modal = document.getElementById(id_modal);

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementsByClassName("myImg")[unique_id-1];
	var modalImg = document.getElementById(id_img);
	var captionText = document.getElementsByClassName("caption")[unique_id-1];
	img.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = this.alt;
	};

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[unique_id-1];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	  modal.style.display = "none";
	};
}
