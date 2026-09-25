let url = $request.url;

// Remove only the "oad" query parameter.
// The request itself is still handled by the normal routing rule,
// e.g. DOMAIN-SUFFIX,googlevideo.com,PROXY.

url = url.replace(
  /([?&])oad=[^&]*/i,
  function (_, separator) {
    return separator === "?" ? "?" : "";
  }
);

$done({
  url: url
});
