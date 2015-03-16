TestMyCode.run("testing hello world function", function(assert){
var result = helloWorld("hello world");
// is the result as we expected?
	assert.equals("hello world", result);
});
	TestMyCode.run("testing hello world function", function(assert){
var result = hello_uppercase("sanele");
// is the result as we expected?
	assert.equals("Hello SANELE!", result);
});
	TestMyCode.run("testing hello world function", function(assert){
var result = hello_joe("Sanele");
// is the result as we expected?
	assert.equals("Hello Sanele", result);
});
	TestMyCode.run("testing hello world function using joe", function(assert){
var result = hello_joe("joe");
// is the result as we expected?
	assert.equals("hello!", result);
});
	TestMyCode.run("testing hello world function using bob", function(assert){
var result = hello_joe("bob");
// is the result as we expected?
	assert.equals("hello!", result);
});
	TestMyCode.run("testing hello world function", function(assert){
var result = number_list(6);
// // is the result as we expected?
	assert.equals([1,2,3,4,5,6].toString(), result.toString());
});
	TestMyCode.run("testing hello world function", function(assert){
var result = number_sum(5);
// is the result as we expected?
	assert.equals(15, result);
});



