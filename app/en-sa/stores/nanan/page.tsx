import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-nanan-header.html';
import body from '@/components/exact/en-sa-stores-nanan-body.html';
import footer from '@/components/exact/en-sa-stores-nanan-footer.html';
import inline from '@/components/exact/en-sa-stores-nanan.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
