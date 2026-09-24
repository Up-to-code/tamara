import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-plugins-woocommerce-header.html';
import body from '@/components/exact/en-sa-plugins-woocommerce-body.html';
import footer from '@/components/exact/en-sa-plugins-woocommerce-footer.html';
import inline from '@/components/exact/en-sa-plugins-woocommerce.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
