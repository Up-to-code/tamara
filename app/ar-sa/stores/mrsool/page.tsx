import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-stores-mrsool-header.html';
import body from '@/components/exact/ar-sa-stores-mrsool-body.html';
import footer from '@/components/exact/ar-sa-stores-mrsool-footer.html';
import inline from '@/components/exact/ar-sa-stores-mrsool.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
