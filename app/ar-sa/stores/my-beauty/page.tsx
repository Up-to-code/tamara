import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-stores-my-beauty-header.html';
import body from '@/components/exact/ar-sa-stores-my-beauty-body.html';
import footer from '@/components/exact/ar-sa-stores-my-beauty-footer.html';
import inline from '@/components/exact/ar-sa-stores-my-beauty.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
