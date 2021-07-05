
// You should implement your task here.

module.exports = function towelSort (matrix) {
	if(matrix == undefined){
		return [];
	} 

	if(matrix === []){
		return [];
	} 

	for(let i = 0; i < matrix.length; i++){
		if(i % 2 == true) {
			matrix[i].reverse();
		}
	}

	const result = matrix.flat();

	return result;
	

}
