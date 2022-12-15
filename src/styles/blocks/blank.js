@for $index from 1 through 31{
  &__day:nth-child(#{$index}):before {
    content: '#{$index}';
    color: #000;
    font-size: 30px;
    font-family: Arial, Helvetica, sans-serif;
}

@each $day, $num in $week-days {
  &__day--start-day-#{$day} {
    margin-left: $num * ($card-square + ($cell-gap * 3)) ;
  }
}

@for $index from $month-length through 31 {
  &__day:nth-child(n + #{$index + 1}) {
    display: none;
  }
}
