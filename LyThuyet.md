### Automatic Static Optimization

    - phát hành các ứng dụng lai có chứa cả các trang được hiển thị bằng máy chủ và được tạo tĩnh.
    - trong quá trình kết xuất trước, đối tượng của bộ định tuyến sẽ trống vì chúng tôi không có thông tin để cung cấp trong giai đoạn này. Sau khi hydrat hóa, Next.js sẽ kích hoạt một bản cập nhật cho ứng dụng của bạn để cung cấp các tham số route trong đối tượng.query

    - next build sẽ phát ra các tệp cho các trang được tối ưu hóa tĩnh. Ví dụ: kết quả cho trang sẽ là:.html pages/about.html
    -> .next/server/pages/about.html

    - Nếu thêm vào trang getServerSideProp
    -> .next/server/pages/about.js

### Static Generation

    - Build ra file .HTML có sẵn -> user gửi request lên thì server sẽ trả vể luôn
    Có 3 loại:  Static HTMl generation: chỉ có file html và không có dữ liệu
                Static HTML + Json data : Sử dụng getStaticProps (lúc dev thì chạy 2 lần nhưng khi lên production thì chạy 3 lần)
                Static HTML + JSON data + Dynamic Routers: getStaticProps + getStaticPaths
    *Chú Ý: Không nên sử dụng getServerSideProps (nếu dùng thì sẽ báo lỗi chỉ được sử dụng cái này thì khỏi cái kia)

### Một component nào đó không muốn render phía server chỉ muốn render phía client thôi

    - sử dụng dynamic để import cái component đó
    - const Header = dynamic(() => import("components/test/header"), { ssr: false });
    - ssr: true thì sẽ render cả thì server luôn

### Render 1 phần ở server trước một file html là khung chưa có dữ liệu

    - Load file markup về client và gọi tới file js để load data lên
    - Sau đó hiện thị lên giao diện
    - Sử dụng useEffect để load data
    - Data mà được render ra từ phía Client thì sẽ không có thẻ html trong view page source

### Để đổi url mà không muốn chạy lại getStatic Props thì có thể sử dụng shallow routing (chỉ render từ phía client có shallow = true): không chạy lại hàm getStaticProps

    - Lần đầu tiên render thì query sẽ bị {}
    - Nó sẽ trigger update ở client side và không có gọi lại hàm getSaticProps
    - Chỉ sử dụng ở phía client và server ko liên quan thì sử dụng sallow routing
