/* eslint-disable @typescript-eslint/no-explicit-any */
import "@testing-library/jest-dom";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import Ordersummary, {
  OrdersummaryProps,
} from "../components/ordersummary/ordersummary";
// import React from "react";
const product = {
  id: 3,
  name: "test_malteadafresa",
  price: 500,
  image:
    "https://raw.githubusercontent.com/ssinuco/burger-queen-api-mock/main/resources/images/water.png",
  type: "Almuerzo",
  dateEntry: "2022-03-05 15:14:10",
  quantity: 1,
};

describe("Ordersummary", () => {
  const mockProps: OrdersummaryProps = {
    selectedProducts: [product],
    onRemoveItem: jest.fn(),
    clearOrder: jest.fn(),
  };

  it("selectesproduct renders correctly", async () => {
    render(<Ordersummary {...mockProps} />);

    await waitFor(() => {
      expect(screen.getByText("test_malteadafresa")).toBeInTheDocument();
    });
  });
  it("increasequantity return value is shown in p element", async () => {
    render(<Ordersummary {...mockProps} />);

    await waitFor(() => {
      const button = screen.getByAltText("añadir");
      fireEvent.click(button);
    });
    expect(screen.getByTestId("p_quantity3")).toHaveTextContent("2");
  });
  //   it('setStateMock',async ()=> {

  //     const setStateMock = jest.fn();
  //     const useStateMock: any = (useState: any) => [useState, setStateMock];
  //     jest.spyOn(React, 'useState').mockImplementation(useStateMock);

  //     setStateMock.mockImplementation({[product.id]: 4});

  //     const {getByAltText} =render(<Ordersummary {...mockProps} />)
  //     const button = getByAltText("disminuir");
  //     const pElement = screen.getByTestId('p_quantity3');
  //     fireEvent.click(button);
  //     expect(pElement).toHaveTextContent('9')
  // });

  
  // it("decreasesequantity return value is shown in p element", async () => {
  //   const useStateMock: any = (initialState: any) => {
  //     const [state, setState] = React.useState(initialState);
  //     const setStateMock = (newValue: any) => {
  //       setState(newValue);
  //     };
  //     return [state, setStateMock];
  //   };
    
  //   useStateMock(4,4);
  //   const { getByAltText } = render(<Ordersummary {...mockProps} />);
  //   const button = getByAltText("disminuir");
  //   fireEvent.click(button);
  //   const pElement = screen.getByTestId('p_quantity3');
  //   console.log('AQUI',pElement.textContent)
  //   expect(pElement).toHaveTextContent('2');
   
  // });

  // it("debe tener un elemento <p> con valor 5", () => {
  //     const mockQuantities: { [key: number]: number } = {
  //         123: 5,
  //       };

  //       const useStateMock = jest.spyOn(React, 'useState');
  //       useStateMock.mockReturnValueOnce([mockQuantities, jest.fn()]);

  //       render(<Ordersummary {...mockProps} />);

  //       // Verifica que el elemento <p> tenga el valor esperado (5)
  //       const pElement = screen.getByTestId('p_quantity3'); 
  //       console.log('AQUI',pElement.textContent);
  //       expect(pElement).toHaveTextContent('5');

  //       // Restaurar la implementación original de useState
  //       useStateMock.mockRestore();
  //     });
});
