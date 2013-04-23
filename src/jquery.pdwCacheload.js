/*
 * Copyright (c) 2013 Benjamin Michotte <benjamin@produweb.be>
 *     ProduWeb SA <http://www.produweb.be>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished
 * to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
if (jQuery) 
{
	(function($) 
	{
		$.extend($.fn, 
		{
			pdwCacheload: function(callback) 
			{
				var fake = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
				$(this).unbind().bind('load', function() 
				{ 
					if (this.src != fake) 
					{ 
						if ($.browser.msie) // && $.browser.version) 
						{
							var img = this;
							setTimeout(function()
							{
								callback.apply(img);
							}, 250);
						}
						else
						{
							callback.apply(this);
						}
					}
				});
				var domElement = $(this).get(0);
				
				// cached images don't fire load sometimes, so we reset src.
			    if (domElement.complete || domElement.complete === undefined)
			    {
				    var src = domElement.src;
				    
				    // webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
				    // data uri bypasses webkit log warning (thx doug jones)
                    domElement.src = fake;
                    domElement.src = src;
			    }
	
				return this;
			}
			}
		});
	})(jQuery);
};