# THUNDER CLIENT

## 1. 설치

1. VS Code Extension에서 Thunder Client 검색
2. 확장팩 설치
3. 왼쪽 사이드바에 번개모양 아이콘 생성 확인

## 2. Thunder Client 실행

1. 왼쪽 사이드바에서 번개 ⚡ 아이콘 클릭 → Thunder Client 열림
2. 상단의 "New Request" 버튼 클릭

## 3. json-server 실행

1. db.json을 json-server로 실행
2. http://localhost:3000 확인

## 4. CRUD 테스트 예제

### 1) Read - 모든 todos 조회

1. Method: GET
2. URL: http://localhost:3000/todos
3. [Send] 버튼 클릭
4. JSON 응답 뜨면 성공

### 2) Create - 새 todo 추가

1.  Method: POST
2.  URL: http://localhost:3000/todos
3.  Body 탭 → JSON 선택 - 내용 입력 후 [Send] 버튼 클릭
    ```
    {
    "id": "5",
    "todo": "공부하기",
    "desc": "열심히 Vue 공부하자",
    "done": false
    }
    ```
4.  위의 내용이 추가된 JSON 응답이 뜨면 성공

### 3) Update - 일부 수정 (PATCH)

1. Method: PATCH
2. URL: http://localhost:3000/todos/5
3. Body 탭 → JSON
   ```
   {
     "done": true
   }
   ```
4. [Send] 버튼 클릭 → 수정된 항목 반환되면 성공

### 4) Delete - 삭제

1. Method: DELETE
2. URL: http://localhost:3000/todos/5 (삭제하고 싶은 포인트로 작성하면 됨)
3. Send 클릭 → 응답 {} 또는 빈 응답이면 성공

### 5) 요약

| 작업      | 메서드(Method) | 엔드포인트(URL) | 설명                     |
| --------- | -------------- | --------------- | ------------------------ |
| 전체 조회 | GET            | `/todos`        | 모든 할 일 목록 가져오기 |
| 단일 조회 | GET            | `/todos/:id`    | 특정 ID의 할 일 조회     |
| 항목 추가 | POST           | `/todos`        | 새로운 할 일 추가        |
| 전체 수정 | PUT            | `/todos/:id`    | 항목 전체 수정           |
| 일부 수정 | PATCH          | `/todos/:id`    | 항목 일부 수정           |
| 삭제      | DELETE         | `/todos/:id`    | 항목 삭제                |
