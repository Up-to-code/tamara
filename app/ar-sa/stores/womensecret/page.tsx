import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-stores-womensecret-header.html';
import body from '@/components/exact/ar-sa-stores-womensecret-body.html';
import footer from '@/components/exact/ar-sa-stores-womensecret-footer.html';
import inline from '@/components/exact/ar-sa-stores-womensecret.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
