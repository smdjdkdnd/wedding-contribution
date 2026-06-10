# Google Sheets 저장 연결 방법

Google Sheet:
https://docs.google.com/spreadsheets/d/1fLdKR_7G7SDYO63MOS-i9LtqDsBDtqSYnPedJS1iOOg

1. 위 스프레드시트를 엽니다.
2. 메뉴에서 `확장 프로그램` > `Apps Script`를 엽니다.
3. `google-apps-script.gs` 파일 내용을 Apps Script 편집기에 붙여넣습니다.
4. `배포` > `새 배포`를 누릅니다.
5. 유형은 `웹 앱`으로 선택합니다.
6. `실행 사용자`는 `나`, `액세스 권한`은 `모든 사용자`로 선택합니다.
7. 배포 후 생성되는 `/exec`로 끝나는 웹 앱 URL을 복사합니다.
8. `contribution-reception.html` 안의 아래 줄에 URL을 넣습니다.

```js
const GOOGLE_SCRIPT_URL = "여기에_웹앱_URL";
```

이후 웹페이지에서 저장하면 `축의금DB` 시트에 행이 추가됩니다.
