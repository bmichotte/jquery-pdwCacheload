###jQuery pdwCacheload

Script used to avoid onload event with cached image


Example

```
$(function()
{
	$('.images').pdwCacheload(function()
	{
		doSomethingWithYouImage();
	})
});
```