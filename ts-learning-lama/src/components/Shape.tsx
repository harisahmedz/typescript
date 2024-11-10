import React from 'react'


type ShapeType = "cube" |  "square" | "rectangle" | "triangle"
type twoDShapeType = Exclude<ShapeType,"cube">;

type ThemeType = "dark" | "light"
type ColorType ="red" | "blue" |"yellow"

type ItemProps = {
  //   color: `${ThemeType}-${ColorType}`;
  color: Exclude<`${ThemeType}-${ColorType}`, "dark-yellow">;
};
const Shape = (props: ItemProps) => {
  const shape: ShapeType = "cube";
  const twoDShape: twoDShapeType = "rectangle";
  return (
    <div>
      {props.color}
      {shape}
      {twoDShape}
    </div>
  );
};

export default Shape