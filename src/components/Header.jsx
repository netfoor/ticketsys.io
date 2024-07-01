import React from "react";
import {
  RiNotification3Line,
  RiArrowDownSLine,
  RiSettings3Line,
  RiLogoutCircleRLine,
  RiThumbUpLine,
  RiChat3Line,
} from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-[7vh] md:h-[10vh] border-b border-secondary-100 p-8 flex items-center justify-end">
      <nav className="flex items-center gap-2">
        <Menu
          menuButton={
            <MenuButton className="relative hover:bg-secondary-100 p-2 rounded-lg transition-colors">
              <RiNotification3Line />
              <span className="absolute -top-0.5 right-0 bg-primary py-0.5 px-[5px] box-content text-black rounded-full text-[8px] font-bold">
                2
              </span>
            </MenuButton>
          }
          align="end"
          arrow
          transition
          arrowClassName="bg-secondary-100"
          menuClassName="bg-secondary-100 p-4"
        >
          <h1 className="text-gray-300 text-center font-medium">
            Notificaciones (2)
          </h1>
          <hr className="my-6 border-gray-500" />
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/"
              className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg"
            >
              <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.vecteezy.com%2Fvectores-gratis%2Ficono-usuario&psig=AOvVaw3OMnrLKda2dxkrRUNMQ6Xu&ust=1713705396850000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLjQ4pvw0IUDFQAAAAAdAAAAABAE.png"
                className="w-8 h-8 object-cover rounded-full"
              />
              <div className="text-sm flex flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span>user</span>{" "}
                  <span className="text-[8px]">21/10/2022</span>
                </div>
                <p className="text-gray-500 text-xs">
                  Lorem ipsum dolor sit amet...
                </p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/"
              className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg"
            >
              <RiThumbUpLine className="p-2 bg-blue-200 text-blue-700 box-content rounded-full" />
              <div className="text-sm flex flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span>Nuevo like</span>{" "}
                  <span className="text-[8px]">21/10/2022</span>
                </div>
                <p className="text-gray-500 text-xs">
                  A Jorge Trejo le gusta tu pub...
                </p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/"
              className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg"
            >
              <RiChat3Line className="p-2 bg-yellow-200 text-yellow-700 box-content rounded-full" />
              <div className="text-sm flex flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span>Nuevo comentario</span>{" "}
                  <span className="text-[8px]">21/10/2022</span>
                </div>
                <p className="text-gray-500 text-xs">
                  Jorge Trejo ha comentado tu...
                </p>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-6 border-gray-500" />
          <MenuItem className="p-0 hover:bg-transparent flex justify-center cursor-default">
            <Link
              to="/"
              className="text-gray-400 text-sm hover:text-white transition-colors"
            >
              Todas las notificaciones
            </Link>
          </MenuItem>
        </Menu>
        <Menu
          menuButton={
            <MenuButton className="flex items-center gap-x-2 hover:bg-secondary-100 p-2 rounded-lg transition-colors">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhIIBxAWFRIXGR0PDhgXEA8WFRIVIBIWGBUXIhYZHSggJBolIBUVITEtJSk3Li4uIR8zODssNyg5LisBCgoKDQ0NEQ0PDisZExkrKysrKysrKysrKysrKzcrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABQYIBwQDAf/EAD0QAAIBAgMDCQQIBgMBAAAAAAABAgMEBQYRIUGBBxITMVFhcZTRFiIyVCM0QlJykbHBFIKhosLSJFOTFf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHmvby3sbaVzeTjCEdspSkoxS8WB6T8OVZj5YLahJ0cv0ekfV0lTWNPxUPifHQouIcoear5+9dygtypRhBLilr/UYa0gDLvtVmLnc7+OuPMVfUksP5Q81WL927lNb1VjCafFrX+owaQBynLvLBbV5KjmCj0b6ukp86UOMPiXDU6bZXlvfW0bmznGcJbYyjJSi14oD0gAAAAAAAAAAAAAAAAAAAAAAAi8wY1ZYBhk8QxCWkI7FptlOT6opb2zPOb824jmq96S7fNpJ60aSfuQXa/vT73w0JHlOzTPMWPSpW8v+PRbp0duyUuqdTi9i7l3lOLEoACoAAAWDKGbcRyre9JaPnUm9a1Jv3JrtX3Z9646lfAGpsv41ZY/hkMQw+WsJbHrslCS64tbmiUM7cmOaJ5dx6NK4l/x6zVOv2Rl1QqcHsfc+40SZaAAAAAAAAAAAAAAAAAAAKxyj4u8FyfcXFJ6TkugpPslP3deC1fAs5y7l4uJQwa1tl1Squb7+bTf+4HFupaIAGmQAAAAAAADRPYzSfJxi7xrJ9vc1XrOK6Cr3yh7uvFaPiZsO08g9xKeDXVs+qNVTXdzqa/0JVjqIAIoAAAAAAAAAAAAAAAAcq5e6UpYbaVl1KpOL409f8DqpTOVjDJYnkuq6a1lSauY9ukfj/tcwM8AA0yAAAAAAAAHZeQSlKOG3dZ9TqQiuFPX/ADONGh+SfDJYZkuk6i0lVbuZdukvg/tUCVYuYAIoAAAAAAAAAAAAAAAAfOpThVpuFRappxkn1NPrR9ABmTO+XamWcfnZNPo379vLdKk3sXiup+HeQBpXOuVrXNeEu1qvm1Y6yoVNNXCXf2wfU1+6M74zhN9guISscSg4zjxUlulF70+0sSvEACoAAAAe3BsJvsaxCNjhsHKcuCit8pPcl2gSWScu1cy4/CySfRrSdw/u0k9q8X1Lx7jS9OnClBQprRJKMUupJdSK9krK1rlTCVa0nzqstJV6mmjnLu7ILqS/dllMtAAAAAAAAAAAAAAAAAAAAAAQuY8uYZmKz/h8Up87TVwktk6b7Yy3fo95LVJxpwc6jSS2tt6JLxKPj3Knl/C6ro2rlcST0l0XN5ke36R7Hw1AoeYuSfGcPk6mEtXFPrSXNjVS74vZLg+BRr3D72wqdHf0alN7+fTnH9UaKwPPWXcbSVrcRjN/YqPo5ru0ex8GyxyUKsNHo0+7VMupjJHOj2r8z1WWH3t/PmWFGpUe7mU5y/RGpv8A5thzud0FPXt6OGv6H3ioUoaLRJd2iQ0xwvLvJRjOISVTF2ren1tPmyqtd0VsjxfA69lzLuGZds/4fC6fN10c5PbOb7ZS3/otx4scz1l3BE1c3EZTX2Kb6Sb7tFsXFoisB5U8v4pV6G6creWukelS5kuz6RbFx0Iq+A+dOcKkFOm009qaeqa8T6AAAAAAAAAAAAAAAAAAAAK/mrNWG5Xsunv5ayevRU47alR9y3Ltb2I+Wdc1WuVMKdxV96rLWNvT10c5dr7ILe/3ZnbF8UvMZxCd/iM3KpJ7XuS3RityW5ATGbM64vmeq1dT5lH7NKDkoL8X333vgkVsA0yNJrRnts8VxGw+pXFWn+CtVivyT0PEAJz2wzLp9fuP/aZH3mK4jf8A124q1Px1qsl+Teh4wASSWiAAFkynnTF8sVVG1nz6P26U3Jwf4fuvvXFM7tlTNWG5osunsJaSWnS05bKlN963rsa2MzKezB8UvMGxCF/h03GpF7Hukt8ZLenvRMXWrgVrJWarXNeFK5pe7UjpGvT11cJdq7YPc/3RZSKAAAAAAAAAAAAAB5sQvKGHWU7y6lzYQi5zfYkj0nJuXDH3SoUsBt3tn9PcbfsJ/Rxfi03/ACoDm+bMwXOZManiFzsXw0YN7KdNdUfHe+9shgDTIAAAAAAAAAAAAAmcp5gustY1DEbbVr4a0NdlSm+uPjvXejTGH3lDEbKF5ay50JxU4PtTRk47DyH5gdS3q4DcP4Na9vt+w39JFeDaf8zIrrIAIoAAAAAAAAAABmHO2KvGc1XN7rrFzcKf4Ie7D9NeJo3H7p2GB3F2n8FKc14qDaMqrXTbxLEr9ABUAAAAAAAAAAAAAAnMk4o8HzTbXuukVNQqfgn7s/6PXgQZ+PXTZwA12COwC6d9gdvdv7dKFR+LgmyRMtAAAAAAAAAAArnKHNxyRetf9Ml+ewzQ+s0zn63rXWTruhbQlKcqbUIxi5Sk9mxJdZn15YzBr9RufL1fQsSogEt7L5g+RufL1fQey+YPkbny9X0AiQS3svmD5G58vV9B7L5g+RufL1fQCJBLey+YPkbny9X0HsvmD5G58vV9AIkEt7L5g+RufL1fQey+YPkbny9X0AiQS3svmD5G58vV9B7L5g+RufL1fQCJBLey+YPkbny9X0HsvmD5G58vV9AIkLrJb2XzB8jc+Xq+gWWMwa/Ubny9X0A0DyeTcskWUn/0xX5bCxleyDb1rXJ1pQuYShONJKcZKUZRe3Y0+osJFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k="
                className="w-6 h-6 object-cover rounded-full"
              />
              <span>User</span>
              <RiArrowDownSLine />
            </MenuButton>
          }
          align="end"
          arrow
          arrowClassName="bg-secondary-100"
          transition
          menuClassName="bg-secondary-100 p-4"
        >
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/perfil"
              className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <img
                src="data:image/jpeg;base64,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"
                className="w-8 h-8 object-cover rounded-full"
              />
              <div className="flex flex-col text-sm">
                <span className="text-sm">User</span>
                <span className="text-xs text-gray-500">User</span>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-4 border-gray-500" />
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/configuracion"
              className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <RiSettings3Line /> Configuración
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/cerrar-sesion"
              className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <RiLogoutCircleRLine /> Cerrar sesión
            </Link>
          </MenuItem>
        </Menu>
      </nav>
    </header>
  );
};

export default Header;
