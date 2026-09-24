import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-alabdullatif-header.html';
import body from '@/components/exact/en-sa-stores-alabdullatif-body.html';
import footer from '@/components/exact/en-sa-stores-alabdullatif-footer.html';
import inline from '@/components/exact/en-sa-stores-alabdullatif.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
