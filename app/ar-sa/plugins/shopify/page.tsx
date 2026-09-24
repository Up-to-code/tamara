import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-plugins-shopify-header.html';
import body from '@/components/exact/ar-sa-plugins-shopify-body.html';
import footer from '@/components/exact/ar-sa-plugins-shopify-footer.html';
import inline from '@/components/exact/ar-sa-plugins-shopify.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
