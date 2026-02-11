# HTML Entity Decoder API (Strict v1)

## Endpoint

POST /v1/decode-html

## Payload

{
  "input": "&lt;div&gt;Hello&amp;World&lt;/div&gt;"
}

## Response

{
  "output": "<div>Hello&World</div>"
}

## Health

GET /health

## Non-Expansion Clause

This API decodes HTML entities only.
No encoding.
No transformation beyond entity decoding.
