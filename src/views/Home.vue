<template>
	<div id="app">
    <div class="home-background"></div>
    <div class="home d-flex">
      <b-container class="d-flex align-items-center justify-content-center flex-column">
        <b-card class="text-center"
          bg-variant="light"
          text-variant="black"
          title="Уважаемые собственники помещений!"
        >
       
          <div>
             
            <b-card-text>
              Приглашаем Вас принять участие в общем собрании собственников
              помещений в форме очно-заочного голосования (совместного
              присутствия собственников помещений в данном доме для обсуждения
              вопросов повестки дня и принятия решений по вопросам, поставленным
              на голосование, опросным путем – передачи оформленных в письменной
              форме решений собственников по вопросам повестки дня в место или
              по адресу, указанному в сообщении)
            </b-card-text>
          </div>
          <div class="mt-4 mx-auto text-center">
            <b-button href="#" variant="primary" to="/building">Корпус 1</b-button>
            <b-button href="#" variant="primary" class="mx-1">Корпус 2</b-button>
            <b-button href="#" variant="primary">Корпус 3</b-button>
          </div>
        </b-card>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
	name: "Home",
};
</script>

<style lang="scss">
#Home {
	img {
		max-width: 400px;
	}
}
</style>
