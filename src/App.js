import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      curentItems: [],
      showFullItem: false,
      fullItem: {},
      items: [
        {
          id: 1,
          title: "Стул серый",
          img: "chair-grey.jpeg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 2,
          title: "Стол",
          img: "table.webp",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          category: "tables",
          price: "149.99",
        },
        {
          id: 3,
          title: "Диван",
          img: "sofa.jpeg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          category: "sofa",
          price: "549.99",
        },
        {
          id: 4,
          title: "Лампа",
          img: "wall-light.jpeg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          category: "lights",
          price: "25.00",
        },
        {
          id: 5,
          title: "Стул белый",
          img: "chair-white.jpeg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          category: "chairs",
          price: "49.99",
        },
      ],
    };
    this.state.curentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.curentItems}
          onAdd={this.addToOrder}
        />

        {this.state.showFullItem && (
          <ShowFullItem
            item={this.state.fullItem}
            onShowItem={this.onShowItem}
            onAdd={this.addToOrder}
          />
        )}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ curentItems: this.state.items });
      return;
    }
    this.setState({
      curentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArr = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) {
        isInArr = true;
      }
    });
    if (!isInArr) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
