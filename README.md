![0](img/0.png)

<div align="center">
<h1>Momentum</h1>

Cloning the Chrome extension [Momentum](https://momentumdash.com/) with JavaScript

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
</div><br>

### Momentum 클론 코딩 프로젝트

이 프로젝트는 Chrome 생산성 확장 프로그램인 [Momentum](https://momentumdash.com/)을 클론 코딩한 것입니다.  
간단한 시계, 사용자 로그인, 투두 리스트, 날씨 및 배경화면 기능을 `JavaScript`를 통해 구현하였으며, 추가적인 기능 개발을 계속 이어나갈 예정입니다.

### 사용자 로그인

로그인 입력란을 통해 사용자 이름을 받고, 이를 `localStorage`에 저장합니다.  
페이지를 새로고침하더라도 사용자 이름이 계속해서 화면에 출력됩니다.

### 투두 리스트

투두 입력란을 통해 사용자로부터 입력받은 것을 화면에 출력하는 기능을 구현하였습니다.  
`setItem()` 함수를 이용하여 `localStorage`에 투두 목록을 저장하고, `getItem()` 함수로 저장된 투두 목록을 불러옵니다.

### 날씨

[OpenWeather](https://openweathermap.org/)에서 제공하는 [`Current weather data`](https://openweathermap.org/current) API를 이용하여 사용자 위치의 날씨를 불러옵니다.  
불러온 날씨는 사용자의 위치와 함께 오른쪽 상단에 출력됩니다.

### 배경화면

[Unsplash](https://unsplash.com/)에서 제공하는 [API](https://unsplash.com/documentation)를 이용하여 풍경 사진을 랜덤으로 불러옵니다.  
불러온 사진을 `backgroundImage`로 설정하고, 왼쪽 하단에 사진에 대한 간단한 설명과 사진작가의 이름을 출력합니다.  
API로부터 사진을 불러오는데 실패한 경우 `getRandomGradient()` 함수 및 `getRandomColor()` 함수를 통해 대체 배경색을 설정합니다.

<p></p><br>

---

<br>
<div align="center">
<p>Momentum</p>

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FEtihadStadium%2Fmomentum&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

</div><br>
