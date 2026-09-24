import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-stores-noon-minutes-header.html';
import body from '@/components/exact/ar-sa-stores-noon-minutes-body.html';
import footer from '@/components/exact/ar-sa-stores-noon-minutes-footer.html';
import inline from '@/components/exact/ar-sa-stores-noon-minutes.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
